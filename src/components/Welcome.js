import { useSpring, animated } from 'react-spring';

const Welcome = ({ showWelcome }) => {
  const animation = useSpring({
    config: {
      duration: 1500,
    },
    opacity: showWelcome ? 1 : 0,
  });

  return (
      <aside className={`welcomeTip ${showWelcome ? '' : 'welcomeTip--hide'}`}>
        <animated.div style={animation}>
          <p>
            Create your first reminder below.<br />
            <b>Tip: </b>Add an emoji to bring some life to your todo list 😉
          </p>
        </animated.div>
      </aside>
  );
};

export default Welcome;
// Comment