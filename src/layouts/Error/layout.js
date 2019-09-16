import React from 'react'

const ErrorLayout = ({ children }) => (
  <div>
    <div>error layout</div>
    <main className="main text-muted">{children}</main>
  </div>
)

export default ErrorLayout
