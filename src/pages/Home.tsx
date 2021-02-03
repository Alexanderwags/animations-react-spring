import { Row } from "components/Row"
import { Text } from "components/Text"
import React from "react"
import { useSpring, animated } from "react-spring"
import styled from "styled-components"

function Home() {
  const props = useSpring({ scroll: 100, from: { scroll: 0 } })

  return (
    <Container>
      <Container scrollTop={props.scroll}>
        <Text text="william" />
      </Container>
      <Row />
    </Container>
  )
}
export default Home

const Container = styled<any>(animated.div)`
  width: 100%;
  background-color: blueviolet;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`
