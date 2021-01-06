import $ from 'jquery';
import { Book } from './constants/createBookReview';
import createBookListItem from './createBookListItem';
import createBookReview from './createBookReview';

$(function () {
  $.ajax('http://localhost:1323/books').done(function (books) {
    books.forEach((book: Book) => $('#js-book-list').append($(createBookListItem(book))));

    $('.js-toggle-review').on('click', function () {
      const bookId = $(this).data('bookId');
      $('.js-review[data-book-id="' + bookId + '"]').toggle('fast');

      return false;
    });

    $(document).on('click', '.js-like', function () {
      const likeCountElement = $(this).find('.js-like-count');
      likeCountElement.text(likeCountElement.text() + 1);

      return false;
    });

    $(document).on('submit', '.js-form', function (event) {
      const bookId = $(this).data('bookId');
      $.ajax({
        url: 'http://localhost:1323/reviews',
        type: 'post',
        dataType: 'json',
        data: {
          comment: $(event.currentTarget).find('textarea').val()
        }
      }).done(function (review) {
        $('.js-review[data-book-id="' + bookId + '"] > ul').append($(createBookReview(review)));
      });

      return false;
    });
  });
});
