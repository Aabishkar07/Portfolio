import { useState, useEffect } from 'react';

export default function Header() {
  
    useEffect(() => {
        const words = ["Hello, World!", "I am Aabishkar Shrestha!", "I am Web Developer."];
        let i = 0;
        let j = 0;
        let currentWord = "";
        let isDeleting = false;
    
        function type() {
          currentWord = words[i];
          if (isDeleting) {
            document.getElementById("typewriter").textContent = currentWord.substring(0, j - 1);
            j--;
            if (j === 0) {
              isDeleting = false;
              i++;
              if (i === words.length) {
                i = 0;
              }
            }
          } else {
            document.getElementById("typewriter").textContent = currentWord.substring(0, j + 1);
            j++;
            if (j === currentWord.length) {
              isDeleting = true;
            }
          }
          setTimeout(type, 100);
        }
    
        type();
      }, []);
  
    return (
    <div>
      {/* CSS animations */}
      <style jsx>{`
    
    @tailwind base;
@tailwind components;
@tailwind utilities;

/*Start Animations*/
@-webkit-keyframes animatetop {
	from {
		top: -300px;
		opacity: 0;
	}
	to {
		top: 0;
		opacity: 1;
	}
}
@keyframes animatetop {
	from {
		top: -300px;
		opacity: 0;
	}
	to {
		top: 0;
		opacity: 1;
	}
}
@-webkit-keyframes zoomIn {
	0% {
		opacity: 0;
		-webkit-transform: scale3d(0.3, 0.3, 0.3);
		transform: scale3d(0.3, 0.3, 0.3);
	}
	50% {
		opacity: 1;
	}
}
@keyframes zoomIn {
	0% {
		opacity: 0;
		-webkit-transform: scale3d(0.3, 0.3, 0.3);
		transform: scale3d(0.3, 0.3, 0.3);
	}
	50% {
		opacity: 1;
	}
}
/*End Animations*/
/*
-- Start BackGround Animation 
*/
.area {
	// background: #4e54c8;
	background: -webkit-linear-gradient(to left, #8f94fb, #4e54c8);
	width: 100%;
	height: 100vh;
	position: absolute;
	z-index: -1;
}

.circles {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 96%;
	overflow: hidden;
}

.circles li {
	position: absolute;
	display: block;
	list-style: none;
	width: 20px;
	height: 20px;
	background: rgba(255, 255, 255, 0.2);
	animation: animate 25s linear infinite;
	bottom: -150px;
}

.circles li:nth-child(1) {
	left: 25%;
	width: 80px;
	height: 80px;
	animation-delay: 0s;
}

.circles li:nth-child(2) {
	left: 10%;
	width: 20px;
	height: 20px;
	animation-delay: 2s;
	animation-duration: 12s;
}

.circles li:nth-child(3) {
	left: 70%;
	width: 20px;
	height: 20px;
	animation-delay: 4s;
}

.circles li:nth-child(4) {
	left: 40%;
	width: 60px;
	height: 60px;
	animation-delay: 0s;
	animation-duration: 18s;
}

.circles li:nth-child(5) {
	left: 65%;
	width: 20px;
	height: 20px;
	animation-delay: 0s;
}

.circles li:nth-child(6) {
	left: 75%;
	width: 110px;
	height: 110px;
	animation-delay: 3s;
}

.circles li:nth-child(7) {
	left: 35%;
	width: 150px;
	height: 150px;
	animation-delay: 7s;
}

.circles li:nth-child(8) {
	left: 50%;
	width: 25px;
	height: 25px;
	animation-delay: 15s;
	animation-duration: 45s;
}

.circles li:nth-child(9) {
	left: 20%;
	width: 15px;
	height: 15px;
	animation-delay: 2s;
	animation-duration: 35s;
}

.circles li:nth-child(10) {
	left: 85%;
	width: 150px;
	height: 150px;
	animation-delay: 0s;
	animation-duration: 11s;
}

@keyframes animate {
	0% {
		transform: translateY(0) rotate(0deg);
		opacity: 1;
		border-radius: 0;
	}

	100% {
		transform: translateY(-1000px) rotate(720deg);
		opacity: 0;
		border-radius: 50%;
	}
}
/*
-- End BackGround Animation 
*/

.typewriter-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }
      `}</style>

      {/* JSX for background animation */}
      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>

      <div className="typewriter-container">
        <h1 id="typewriter" className="text-4xl font-bold"></h1>
      </div>
    </div>
  );
}


// import { useState, useEffect } from 'react';

// export default function Header() {
//   useEffect(() => {
//     const words = ["Hello, World!", "Welcome to my website!", "This is a typewriter effect."];
//     let i = 0;
//     let j = 0;
//     let currentWord = "";
//     let isDeleting = false;

//     function type() {
//       currentWord = words[i];
//       if (isDeleting) {
//         document.getElementById("typewriter").textContent = currentWord.substring(0, j - 1);
//         j--;
//         if (j === 0) {
//           isDeleting = false;
//           i++;
//           if (i === words.length) {
//             i = 0;
//           }
//         }
//       } else {
//         document.getElementById("typewriter").textContent = currentWord.substring(0, j + 1);
//         j++;
//         if (j === currentWord.length) {
//           isDeleting = true;
//         }
//       }
//       setTimeout(type, 100);
//     }

//     type();
//   }, []); // Run effect only once on mount

//   return (
//     <div>
//       {/* CSS animations */}
//       <style jsx>{`
//         @tailwind base;
//         @tailwind components;
//         @tailwind utilities;


        
//         /* CSS for background animation... */

//         /* Additional styling for typewriter effect */
//         .typewriter-container {
//           position: absolute;
//           top: 50%;
//           left: 50%;
//           transform: translate(-50%, -50%);
//           text-align: center;
//         }
//       `}</style>

//       {/* JSX for background animation */}
//       <div className="area">
//         <ul className="circles">
//           <li></li>
//           <li></li>
//           <li></li>
//           <li></li>
//           <li></li>
//           <li></li>
//           <li></li>
//           <li></li>
//           <li></li>
//           <li></li>
//         </ul>
//       </div>

//       {/* JSX for typewriter effect */}
//       <div className="typewriter-container">
//         <h1 id="typewriter" className="text-4xl font-bold"></h1>
//       </div>
//     </div>
//   );
// }
