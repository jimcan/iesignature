import { Spacer } from "./Spacer";

export const CenterFlex = ({ children }) =>
  <div style={{
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  }}>
    <Spacer />
    {children}
    <Spacer />
  </div>