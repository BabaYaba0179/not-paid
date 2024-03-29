(function () {
  /* change these variables as you wish */
  var due_date = new Date("2024-02-18");
  var days_deadline = 5;
  /* stop changing here */

  var current_date = new Date();
  var utc1 = Date.UTC(
    due_date.getFullYear(),
    due_date.getMonth(),
    due_date.getDate()
  );
  var utc2 = Date.UTC(
    current_date.getFullYear(),
    current_date.getMonth(),
    current_date.getDate()
  );
  var days = Math.floor((utc2 - utc1) / (1000 * 60 * 60 * 24));

  if (days > 0) {
    var days_late = days_deadline - days;
    var opacity = (days_late * 100) / days_deadline / 100;
    opacity = opacity < 0 ? 0 : opacity;
    opacity = opacity > 1 ? 1 : opacity;

    if (opacity >= 0 && opacity <= 1) {
      document.addEventListener("DOMContentLoaded", function () {
        document.body.style.transition = "opacity 1s ease-in-out";
        document.body.style.opacity = opacity;
      });
    }
  }
})();
