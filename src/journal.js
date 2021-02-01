export default function Journal(title, entry) {
  this.entry = entry;
  this.title = title;
}

Journal.prototype.returnEntry = function() {
  console.log(this.entry);
  return (this.title + "\n" + this.entry);
};