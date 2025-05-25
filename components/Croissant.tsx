function dropTheCroissants() {
  function rand(n) {
    return Math.floor(Math.random() * n);
  }

  function id() {
    return String(rand(10000));
  }

  function createKeyFrame(cssDeclaration) {
    const keyFrameId = `animation-${id()}`;

    let frame = `@keyframes ${keyFrameId} {\n`;

    Object.entries(cssDeclaration).forEach(([key, props]) => {
      frame += `\t${key} {\n`;
      Object.entries(props).forEach(([propName, propValue]) => {
        frame += `\t\t${propName}: ${propValue};\n`;
      });
      frame += `\t}`;
    });
    frame += `}`;

    const style = document.createElement('style');
    style.innerHTML = frame;
    document.getElementsByTagName('head')[0].appendChild(style);

    return keyFrameId;
  }

  const createRotateAnimation = (degrees) =>
    createKeyFrame({
      from: {
        transform: `rotate(0)`,
      },
      to: {
        transform: `rotate(${degrees})`,
      },
    });

  const createTranslateYAnimation = (from, to) =>
    createKeyFrame({
      from: {
        top: from,
      },
      to: {
        top: to,
      },
    });

  const createTranslateXAnimation = (from, to) =>
    createKeyFrame({
      from: {
        left: from,
      },
      to: {
        left: to,
      },
    });

  const rotateAnimations = [
    '-360deg',
    '-300deg',
    '-240deg',
    '-180deg',
    '-120deg',
    '-60deg',
    '60deg',
    '120deg',
    '180deg',
    '240deg',
    '300deg',
    '360deg',
  ].map(createRotateAnimation);

  const YPositions = [
    '-200vh',
    '-40vh',
    '-20vh',
    '-10vh',
    '0vh',
    '20vh',
    '30vh',
    '40vh',
    '50vh',
    '60vh',
    '70vh',
    '80vh',
    '100vh',
    '110vh',
    '120vh',
    '130vh',
    '200vh',
  ];

  const translateYAnimations = YPositions.flatMap((yStart) => {
    return YPositions.map((yEnd) => {
      return createTranslateYAnimation(yStart, yEnd);
    });
  });

  const weigh = (el, n) => Array(n).fill(el);

  const translateXAnimations = [
    ...weigh(createTranslateXAnimation('calc(0vw - 250px)', 'calc(100vw + 10px)'), 7),
    ...weigh(createTranslateXAnimation('calc(-50vw - 250px)', 'calc(150vw + 10px)'), 4),
    createTranslateXAnimation('calc(-100vw - 250px)', 'calc(200vw + 10px)'),
    createTranslateXAnimation('calc(-200vw - 250px)', 'calc(300vw + 10px)'),
  ];

  const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

  const images = [
    'https://cdn-icons-png.flaticon.com/512/3187/3187458.png',
    'https://icons.veryicon.com/png/o/food--drinks/sweet-dessert-icon/croissant-18.png',
    'https://icons.veryicon.com/png/o/food--drinks/coffee-related/croissant-20.png',
    'https://images.vexels.com/media/users/3/177415/isolated/preview/87a7963dcc4ef36dfdb64006046b7b85-croissant-bagel-sketch.png',
    'https://www.clipartmax.com/png/full/107-1077339_croissant-croissant-france-png.png',
  ];

  // Create a rectangle for the headshot image
  const headshot = document.getElementById('headshot');
  if (!headshot) return;

  function checkCollision(croissant: HTMLElement) {
    const headshotRect = headshot.getBoundingClientRect();
    const croissantRect = croissant.getBoundingClientRect();

    // Calculate the center point of the headshot
    const headshotCenterX = headshotRect.left + headshotRect.width / 2;
    const headshotCenterY = headshotRect.top + headshotRect.height / 2;

    // Calculate the center point of the croissant
    const croissantCenterX = croissantRect.left + croissantRect.width / 2;
    const croissantCenterY = croissantRect.top + croissantRect.height / 2;

    // Define a radius around the center point (adjust this value to change the "eating zone")
    const eatZoneRadius = headshotRect.width / 1.5;

    // Calculate distance between centers using the distance formula
    const distance = Math.sqrt(
      Math.pow(croissantCenterX - headshotCenterX, 2) + Math.pow(croissantCenterY - headshotCenterY, 2)
    );

    // Return true if the croissant's center is within the eating zone
    return distance < eatZoneRadius;
  }

  function eatCroissant(croissant: HTMLElement) {
    // Stop the existing animations

    // Get current position to prevent jumping
    const rect = croissant.getBoundingClientRect();
    croissant.style.left = `${rect.left}px`;
    croissant.style.top = `${rect.top}px`;

    croissant.style.animationName = 'none';

    // Add multiple transitions for a more dynamic effect
    croissant.style.transition = 'all 0.2s ease-in';

    // Optional: Add a quick "pop" scale effect before disappearing
    requestAnimationFrame(() => {
      croissant.style.transform = `
                scale(1.3)
                rotate(40deg)
            `;
    });
    setTimeout(() => {
      croissant.style.transform = `
                    scale(0.2) 
                    rotate(180deg) 
                    translateY(-40px)
                `;
      croissant.style.opacity = '0';
    }, 300);

    // Remove the element after animation completes
    setTimeout(() => {
      croissant.remove();
    }, 500);
  }

  // Create a container for all croissants
  const container = document.createElement('div');
  container.className = 'croissant-container';
  document.body.appendChild(container);

  for (let i = 0; i < 50; i++) {
    const el = document.createElement('img');
    el.src = pick(images);
    el.style.width = `${80 + rand(150)}px`;
    el.style.position = 'absolute';
    el.style.left = `-500px`;
    el.style.zIndex = '1';

    el.style.animationName = [pick(translateXAnimations), pick(rotateAnimations), pick(translateYAnimations)].join(
      ', '
    );
    el.style.animationDuration = '4s, 4s, 4s';
    el.style.animationIterationCount = 'infinite';
    el.style.animationTimingFunction = 'linear, linear, linear';
    el.style.animationDelay = `${rand(3000)}ms`;
    container.append(el);

    // Check for collision periodically
    const intervalId = setInterval(() => {
      if (checkCollision(el)) {
        eatCroissant(el);
        clearInterval(intervalId);
      }
    }, 100);

    // Clean up interval when croissant is removed
    el.addEventListener('remove', () => clearInterval(intervalId));
  }
}

export default function Croissant({ children }) {
  return (
    <a href='#' onClick={dropTheCroissants}>
      {children}
    </a>
  );
}
