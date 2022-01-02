const pagination = {
  init(arr, length) {
    this.data = arr;
    this.pageSize = length;
    this.page = 0;
    this.lastPage = Math.ceil(this.data.length / this.pageSize);
  },

  nextPage() {
    if (this.page < this.lastPage) {
      this.page++;
    }
  },

  prevPage() {
    if (this.page > 0) {
      this.page--;
    }
  },

  lastPage() {
    this.page = this.lastPage;
  },

  goToPage(page) {
    if (page >= 0 && page <= this.lastPage) {
      this.page = page;
    }
    return this;
  },

  getPageItems() {
    let newArr = [];
    for (let i = 0; i < this.pageSize; i++) {
      newArr.push(this.data[this.page * this.pageSize + i]);
    }
    return newArr;
  },
};

const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");
pagination.init(alphabetArray, 5);
