class Fact {

  /**
   * @type {number}
   */
  id;

  /**
   * @type {String}
   */
  title;

  /**
   * @type {String}
   */
  author;

  /**
   * @type {Date}
   */
  dateCreated;

  constructor({ id, title, author, dateCreated }) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.dateCreated = dateCreated;
  }

  get description() {
    return `Authored by ${this.author} on the ${this.dateCreated.toLocaleString('en-US')}`;
  }

}

export {
  Fact
}