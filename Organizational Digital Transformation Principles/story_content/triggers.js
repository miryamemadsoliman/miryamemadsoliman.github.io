function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5ZaBSJusSmm":
        Script1();
        break;
      case "5oUM7jyV71G":
        Script2();
        break;
      case "66fOS2elwnq":
        Script3();
        break;
      case "5hmxPuvaAO3":
        Script4();
        break;
      case "5pdvxd8QcN3":
        Script5();
        break;
      case "6jamvY4Hl2I":
        Script6();
        break;
      case "5cZA1ompIv8":
        Script7();
        break;
      case "6EFdIom4l4V":
        Script8();
        break;
      case "6ViMuWaOnHC":
        Script9();
        break;
      case "5wCrWNgMivF":
        Script10();
        break;
      case "5XhGieZnb8X":
        Script11();
        break;
      case "6Nm2gQEc2Yi":
        Script12();
        break;
      case "6eaIN4Qdeaw":
        Script13();
        break;
      case "5mmdXxFfH3X":
        Script14();
        break;
      case "5s0qzeGPv24":
        Script15();
        break;
      case "656TpWiQ7oh":
        Script16();
        break;
      case "6LjM9epHL9v":
        Script17();
        break;
      case "6is6pK3D4nP":
        Script18();
        break;
      case "5nyKBe9AaSb":
        Script19();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
var getKeyDown = player.getKeyDown;
var keydown = player.keydown;
var keyup = player.keyup;
window.Script1 = function()
{
  const target = object('63B49lMX5a9');
const duration = 750;
const easing = 'ease-out';
const id = '5xWGoXMEZBe';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script2 = function()
{
  const target = object('63B49lMX5a9');
const duration = 750;
const easing = 'ease-out';
const id = '5xWGoXMEZBe_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script3 = function()
{
  const target = object('63mM91xMdGy');
const duration = 750;
const easing = 'ease-out';
const id = '6CXtOC2njOE';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script4 = function()
{
  const target = object('6ro532dwqH2');
const duration = 750;
const easing = 'ease-out';
const id = '6k6KJT6jcsu';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script5 = function()
{
  const target = object('6XrO0W8NzCM');
const duration = 750;
const easing = 'ease-out';
const id = '6k6KJT6jcsu';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script6 = function()
{
  const target = object('6Whp6dLDX3M');
const duration = 750;
const easing = 'ease-out';
const id = '6k6KJT6jcsu';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script7 = function()
{
  const target = object('6ZrMPJ7UfJA');
const duration = 750;
const easing = 'ease-out';
const id = '6V5MupfODNl';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script8 = function()
{
  const target = object('6ZrMPJ7UfJA');
const duration = 750;
const easing = 'ease-out';
const id = '6V5MupfODNl_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script9 = function()
{
  const target = object('5YsawmwxdAc');
const duration = 750;
const easing = 'ease-out';
const id = '5ctW609kWTE';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script10 = function()
{
  const target = object('6FOZgQKivYl');
const duration = 750;
const easing = 'ease-out';
const id = '5ctW609kWTE';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script11 = function()
{
  const target = object('6oAMGheYYx2');
const duration = 1250;
const easing = 'ease-out';
const id = '691uZV4QTpg';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script12 = function()
{
  player.once(() => {
const target = object('6V4qEPlv5eW');
const duration = 1750;
const easing = 'ease-out';
const id = '693ABs7I9Vf';
const shakeAmount = 2;
const delay = 35646;
addToTimeline(
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script13 = function()
{
  const target = object('6Tdq8iLg7PU');
const duration = 1250;
const easing = 'ease-out';
const id = '5iE3EOJDin1';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script14 = function()
{
  const target = object('5s3y1XyKnLX');
const duration = 1250;
const easing = 'ease-out';
const id = '5iE3EOJDin1';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script15 = function()
{
  const target = object('6kOwSLhMnxS');
const duration = 1250;
const easing = 'ease-out';
const id = '6YLmkPuF8Qd';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script16 = function()
{
  player.once(() => {
const target = object('5lvtPMuYpCD');
const duration = 2000;
const easing = 'ease-out';
const id = '5oJ0qs7ZGM5';
const pulseAmount = 0.07;
const delay = 0;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script17 = function()
{
  player.once(() => {
const target = object('6WVmXbrp0MK');
const duration = 2000;
const easing = 'ease-out';
const id = '5gC1asGNn9e';
const pulseAmount = 0.07;
const delay = 0;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script18 = function()
{
  player.once(() => {
const target = object('6hZsekMRJnY');
const duration = 2000;
const easing = 'ease-out';
const id = '5Zr1EZuT6HE';
const pulseAmount = 0.07;
const delay = 0;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script19 = function()
{
  player.once(() => {
const target = object('5ZYdnCuJJkg');
const duration = 2000;
const easing = 'ease-out';
const id = '6i0XRdh0pxi';
const pulseAmount = 0.07;
const delay = 0;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

};
