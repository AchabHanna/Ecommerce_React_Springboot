import styled from 'styled-components';

export const Overlay = styled.div `
  position: fixed;
  z-index: 4;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(49,49,49,0.8);
`
export const ContentModal = styled.div `
  width: 100vw;
  height: 100vh;
  background: white;

  @media (min-width: 800px) {
    width: 42vw ;
  }

  @media (min-width: 1070px) {
    width: 30vw;
  }
`
export const ModalTop = styled.div `
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  padding: 0 6%;  
  height: 8vh;
	border-bottom: 1px solid #ECECEC;
`
export const IconClose = styled.img `
  width: 15px;
  cursor: pointer;
  transition: 1s;

  &:hover {
    transform: scale(1.3);
  }
`
export const Menu = styled.nav `
  @media (min-width: 800px) {
    padding-top: 0;
  }
`
export const MenuLink = styled.a `
  font-size: 14px;
  text-transform: uppercase;
  color: #126C80;
  text-decoration: none;

  &:hover {
    color: #228AAB;
  }
  
  @media (min-width: 604px) {
    font-size: 16px;
  }
`
export const ContentMenu = styled.div `
height: 55vh;
	display: flex;
  flex-direction: column;
  justify-content: center;
  justify-content: space-evenly;
  padding: 0 6%;

  @media (min-width: 800px) {
    height: 48vh;
		justify-content: space-evenly;
  }
`