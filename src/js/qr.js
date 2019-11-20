const qrCode = require("qrcode");
const canvas = document.getElementById("canvas");
const canvasPopup = document.getElementById("canvas--popup");
const root = document.getElementById("root");
const body = document.querySelector("body");

const handleClickItem = e => {
  const link = e.target.closest("div").dataset.source;
  canvasPopup.style.display = "block";
  qrCode.toCanvas(canvas, link, function(error) {
    if (error) console.error(error);
  });
  e.stopPropagation();
};

const handleClickBody = e => {
  if (!(e.target.id === "canvas" || e.target.id === "popup--canvas")) {
    canvasPopup.style.display = "none";
  }
};

body.addEventListener("click", handleClickBody);
root.addEventListener("click", handleClickItem);
