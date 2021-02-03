import React from "react"
import { animated, useSpring } from "react-spring"
import styled from "styled-components"

interface TextProps {
  text?: string
}
export const Text = (prop: TextProps) => {
  // const style = useSpring({ to: { opacity: 1, color: "red" } })
  const props = useSpring({
    to: { transform: "scale(3)" },

    from: { transform: "scale(1)" },
    config: { duration: 250, mass: 1, tension: 170, friction: 26 },
  })

  // return <StyledText props={style}>{props.text}</StyledText>
  return <animated.div style={props}>I will fade in and out</animated.div>
}
const StyledText = styled<any>(animated.p)`
  font-size: 18px;
  color: white;
`
