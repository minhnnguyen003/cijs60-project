window.requestAnimationFrame(function () {
  new GameManager(4, KeyboardInputManager, HTMLActuator, LocalStorageManager);
});
// Wait till the browser is ready to render the game (avoids glitches)