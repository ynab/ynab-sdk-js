export class Util {
  public static getTodaysDateInISOFormat() {
    return new Date(Date.now()).toLocaleString().substr(0, 10);
  }
}
