function receivesAFunction(callback) {
    callback()
}

function returnsANamedFunction() {
    return function yeet() {
      console.log("yeet this into the trash once you are done!");
    };
  }

  function returnsAnAnonymousFunction() {
    return () => console.log("I wanna be a cowboy baby");
  }