import TabButton from './TabButton';
export default function Tabs({ children, buttons, ButtonsContainer = 'menu' }) {
    //const ButtonsContainerClass = buttonsContainer;
    return (
        <>
            <ButtonsContainer>{buttons}</ButtonsContainer>
            {children}
        </>
    );
}
