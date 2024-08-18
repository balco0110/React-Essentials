export default function TabButton({children, onSelect, isSelected}) {
    
    return (
    <li>
        <button className={isSelected ? 'active' : undefined } onClick={onSelect}>{children}</button>
    </li>
    );
}

// Another way to write the same code
//  export default function TabButton({props}) {
//         return (
//         <li>
//             <button>{props.children}</button>
//         </li>
//         )
// }