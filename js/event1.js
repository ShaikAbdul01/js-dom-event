const handlerOnClick = document.getElementById("handlerChange");
    function onclicked() {
      handlerOnClick.innerText = "That is Magic by js dom";
    }
    // option 2
    document.getElementById("evenLi").addEventListener("click", function () {
      handlerOnClick.innerText = "Joy Bangla";
    });