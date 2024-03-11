// This function receive the number of the total posts and return the number of pages,
// which calculated from total posts divide a const variable, postPerPage.

import { SITE } from "@config";

const getPageNumbers = (numberOfPosts: number) => {
  const numberOfPages = numberOfPosts / Number(SITE.postPerPage);

  let pageNumbers: number[] = [];
  for (let i = 1; i <= Math.ceil(numberOfPages); i++) {
    pageNumbers = [...pageNumbers, i];
  }

  return pageNumbers;
};

export default getPageNumbers;
