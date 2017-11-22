// MIT License

// Copyright (c) 2017 William Pleasant-Ryan

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

// This was derived from https://github.com/willryan/factory.ts
// I added some functionality, like the ability to nest factories. I need to submit a PR. -- Taylor

export type FactoryFunc<T> = (item: Partial<T>) => T;

export class Generator<T> {
  constructor(readonly func: (seq: number) => T) {}
  public build(seq: number): T {
    return this.func(seq);
  }
}
export class Derived<TOwner, TProperty> {
  constructor(readonly func: (owner: TOwner, seq: number) => TProperty) {}
  public build(owner: TOwner, seq: number): TProperty {
    const ret = this.func(owner, seq);
    return ret;
  }
}

export class Factory<T> {
  private seqNum: number;
  constructor(readonly builder: Builder<T>) {
    this.seqNum = 0;
  }

  public build(item?: Partial<T>): T {
    this.seqNum++;
    const base = buildBase(this.seqNum, this.builder);
    const v = Object.assign({}, base.value, item);
    if (item) {
      const keys = Object.keys(item);
      for (const der of base.derived) {
        if (keys.indexOf(der.key) < 0) {
          (v as any)[der.key] = (der.derived as any).build(v, this.seqNum);
        }
      }
    }
    return v;
  }

  public buildList(count: number, item?: Partial<T>): T[] {
    const ts: T[] = Array(count); // allocate to correct size
    for (let i = 0; i < count; i++) {
      ts[i] = this.build(item);
    }
    return ts;
  }

  public extend(def: Partial<Builder<T>>): Factory<T> {
    const builder = Object.assign({}, this.builder, def);
    return new Factory(builder);
  }

  public withDerivation<KOut extends keyof T>(
    kOut: KOut,
    f: (v1: T, seq: number) => T[KOut]
  ): Factory<T> {
    const partial: any = {};
    partial[kOut] = new Derived<T, T[KOut]>(f);
    return this.extend(partial);
  }

  public withDerivation1<K1 extends keyof T, KOut extends keyof T>(
    kInput: [K1],
    kOut: KOut,
    f: (v1: T[K1], seq: number) => T[KOut]
  ): Factory<T> {
    const partial: any = {};
    partial[kOut] = new Derived<T, T[KOut]>((t, i) => f(t[kInput[0]], i));
    return this.extend(partial);
  }

  public withDerivation2<
    K1 extends keyof T,
    K2 extends keyof T,
    KOut extends keyof T
  >(
    kInput: [K1, K2],
    kOut: KOut,
    f: (v1: T[K1], v2: T[K2], seq: number) => T[KOut]
  ): Factory<T> {
    const partial: any = {};
    partial[kOut] = new Derived<T, T[KOut]>((t, i) =>
      f(t[kInput[0]], t[kInput[1]], i)
    );
    return this.extend(partial);
  }

  public withDerivation3<
    K1 extends keyof T,
    K2 extends keyof T,
    K3 extends keyof T,
    KOut extends keyof T
  >(
    kInput: [K1, K2, K3],
    kOut: KOut,
    f: (v1: T[K1], v2: T[K2], v3: T[K3], seq: number) => T[KOut]
  ): Factory<T> {
    const partial: any = {};
    partial[kOut] = new Derived<T, T[KOut]>((t, i) =>
      f(t[kInput[0]], t[kInput[1]], t[kInput[2]], i)
    );
    return this.extend(partial);
  }

  public withDerivation4<
    K1 extends keyof T,
    K2 extends keyof T,
    K3 extends keyof T,
    K4 extends keyof T,
    KOut extends keyof T
  >(
    kInput: [K1, K2, K3, K4],
    kOut: KOut,
    f: (v1: T[K1], v2: T[K2], v3: T[K3], v4: T[K4], seq: number) => T[KOut]
  ): Factory<T> {
    const partial: any = {};
    partial[kOut] = new Derived<T, T[KOut]>((t, i) =>
      f(t[kInput[0]], t[kInput[1]], t[kInput[2]], t[kInput[3]], i)
    );
    return this.extend(partial);
  }

  public withDerivation5<
    K1 extends keyof T,
    K2 extends keyof T,
    K3 extends keyof T,
    K4 extends keyof T,
    K5 extends keyof T,
    KOut extends keyof T
  >(
    kInput: [K1, K2, K3, K4, K5],
    kOut: KOut,
    f: (
      v1: T[K1],
      v2: T[K2],
      v3: T[K3],
      v4: T[K4],
      v5: T[K5],
      seq: number
    ) => T[KOut]
  ): Factory<T> {
    const partial: any = {};
    partial[kOut] = new Derived<T, T[KOut]>((t, i) =>
      f(t[kInput[0]], t[kInput[1]], t[kInput[2]], t[kInput[3]], t[kInput[4]], i)
    );
    return this.extend(partial);
  }
}

interface TestInterface {
  num: number;
  nested: {
    str: string;
  };
}

export type Builder<T> = {
  [// Each property is either a
  P in keyof T]:  //literal of that type
    | T[P]
    // Or a generator for that type
    | Generator<T[P]>
    // Or a derived property
    | Derived<T, T[P]>
    // Or a builder of that type
    //| Builder<T[P]>
    // Or a factory of that type
    | Factory<T[P]>
};

// export type LooksLike<T> = {
//     [P in keyof T]: T[P] | (()=>T[P]) | LooksLike<T[P]>
//   };

//   let builderTest : Builder<TestInterface> = {
//     num: 5,
//     nested: {
//         str : each(i=>`${i}`) as Generator<string>
//     }
// }

//   type Func<T> = (...args: any[]) => T;
//   type Spec<T> = {
//       [P in keyof T]: T[P] | Func<T[P]> | Spec<T[P]> ;
//   };

//   /**
//    * Given a spec object recursively mapping properties to functions, creates a function
//    * producing an object of the same structure, by mapping each property to the result
//    * of calling its associated function with the supplied arguments.
//    */
//   declare function applySpec<T>(obj: Spec<T>): (...args: any[]) => T;

//   var g1 = applySpec({
//       sum: (a:any) => 3,
//       nested: {
//           mul: (b:any) => "n"
//       }
//   });

//   let testSpec : Spec<TestInterface> ={
//       num: 5,
//       nested: {
//           str: ()=>"f"
//       }
//   }

export function val<T>(val: T): Generator<T> {
  return new Generator(() => val);
}

export function each<T>(f: (seqNum: number) => T): Generator<T> {
  return new Generator(f);
}

interface BaseDerived {
  derived: Function;
  key: string;
}

interface BaseBuild<T> {
  readonly value: T;
  readonly derived: BaseDerived[];
}

function buildBase<T>(seqNum: number, builder: Builder<T>): BaseBuild<T> {
  const t: { [key: string]: any } = {};
  const keys = Object.getOwnPropertyNames(builder);
  const derived: BaseDerived[] = [];
  for (const key of keys) {
    const v = (builder as any)[key];
    let value = v;
    if (!!v && typeof v === "object") {
      if (v instanceof Generator) {
        value = v.build(seqNum);
      } else if (v.constructor == Derived) {
        // TODO: I think the type check is off here, or that derived is not really an array of baseDerived
        derived.push({ key, derived: v });
      } else if (v instanceof Factory) {
        value = v.build();
      }
    }
    t[key] = value;
  }
  return { value: t as T, derived };
}

export function makeFactory<T>(builder: Builder<T>): Factory<T> {
  return new Factory(builder);
}
