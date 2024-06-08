let selectList = {};

$(function () {
  $("button").on("click", function () {
    const buttonText = $(this).text();
    const parentId = $(this).parent().attr("id");
    const tagName = `${parentId}-tags`;

    if (selectList[parentId] === undefined) {
      selectList[parentId] = [];
    }

    if (selectList[parentId].includes(buttonText)) {
      selectList[parentId] = selectList[parentId].filter((item) => item !== buttonText);
    } else {
      selectList[parentId].push(buttonText);
    }

    $(this).toggleClass("selected");

    $(`#${tagName}`).text(selectList[parentId].join(", "));
  });
});
