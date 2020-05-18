import React, { useState } from 'react'
import { Container, Header, Divider, Input, Button } from 'semantic-ui-react'
import QRCode from 'qrcode.react'

export default () => {
  const [token, setToken] = useState('')
  const [generateToken, setGenerateToken] = useState(false)

  const handleClick = () => {
    setGenerateToken(true)
  }
  return (
    <Container>
      <Header as="h1" style={{ textAlign: 'center' }}>
        QR Code Generator
      </Header>
      <Divider />
      <Input
        placeholder="Enter the Token here"
        fluid
        onChange={(e) => setToken(e.target.value)}
      />
      <Button onClick={handleClick}>Submit</Button>
      <div>{generateToken ? <QRCode value={token} size={500} /> : null}</div>
    </Container>
  )
}
