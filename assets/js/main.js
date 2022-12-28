console.clear();
console.log("Loaded");

function btc() {
  navigator.clipboard.writeText("bc1q548gs5p65stsmew52fjg4a3q4lcec2h4mnnmtx")
  alert("BTC address successfully copied to clipboard.")
}

if (window.location.pathname.substring(window.location.pathname.lastIndexOf("/")+1).includes("404")==true) {
  console.log("404")
}