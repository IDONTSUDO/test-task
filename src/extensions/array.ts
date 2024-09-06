export const ArrayExtensions = () => {
  if ([].add === undefined) {
    Array.prototype.add = function (element) {
      this.push(element);
      return this;
    };
  }
};
