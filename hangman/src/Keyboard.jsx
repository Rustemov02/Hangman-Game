import styles from '../src/Keyboard.module.css'

const KEYS = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
]

export default function Keyboard({ activeLetters, inactiveLetters, addGuessedLetter , disabled = false }) {

    return (
        <div style={{
            // border : "solid red 1px",
            width: '90%',
            minWidth: '400px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            gap: 8,
            flexWrap: 'wrap',
            textTransform : 'uppercase'
        }}>
            {KEYS.map(key => {
                const isActive = activeLetters.includes(key)
                const isInactive = inactiveLetters.includes(key)
                return <button key={key} disabled={isInactive || isActive || disabled}
                    onClick={() => {
                        addGuessedLetter(key)
                        // console.log("deneme " + key.toUpperCase())
                        console.log('tested!')
                    }} className={`${styles.btn} ${isActive ? styles.active : ''} ${isInactive ? styles.inactive : ''}`}>{key}</button>
            })}
        </div>
    )
}