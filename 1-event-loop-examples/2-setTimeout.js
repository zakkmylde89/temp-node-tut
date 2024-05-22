// Set Timeout Example

// started operating system process
console.log('first');
setTimeout(() => {
    console.log('second');
}, 0);
console.log('third');
// completed operating system process

// here even though setTimeout is set to 0 it still offloads the console.log
// becuase it is in a callback, and callbacks are offloaded. this puts it at
// the end of the event loop. becuase of this we get

//      'first'
//      'third'
//      'second'