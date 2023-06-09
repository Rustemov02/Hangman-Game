const HEAD = (
    <div key='body1' style={{
        width: 50,
        height: 50,
        borderRadius: '100%',
        border: '7px solid black',
        position: 'absolute',
        top: 40,
        right: -30
    }} />
)
const BODY = (
    <div key='body2' style={{
        width: 8,
        height: 100,
        background: 'black', 
        position: 'absolute',
        top: 87,
        right: -8
    }} />
)
const RIGHT_ARM = (
    <div key='body3' style={{
        width : 80,
        height : 8,
        rotate : '-30deg',
        background : 'black',
        position : 'absolute',
        top : 115,
        right : -80
    }}/>
)
const LEFT_ARM = (
    <div key='body4' style={{
        width : 80,
        height : 8,
        rotate : '30deg',
        background : 'black',
        position : 'absolute',
        top : 115,
        right : -10
    }}/>
)
const RIGHT_LEG = (
    <div key='body5' style={{
        width : 80,
        height : 8,
        background : "black",
        position : "absolute",
        rotate : '60deg',
        top : 215,
        right : -65
    }}/>
)
const LEFT_LEG = (
    <div key='body6' style={{
        width : 80 ,
        height : 8,
        background : 'black',
        position : 'absolute',
        rotate : '-60deg',
        top : 215,
        right : -25

    }}/>
)

const BODY_PARTS = [HEAD , BODY , RIGHT_ARM , LEFT_ARM , RIGHT_LEG , LEFT_LEG]

function HangmanDrawing({numberOfGuesses}) {


    return (
        <div style={{ position: 'relative' }}>
            {BODY_PARTS.slice(0, numberOfGuesses)}
            <div style={{ width: 10, height: 40, background: 'black', marginLeft: 300, position: 'absolute' }} />
            <div style={{ width: 200, height: 10, background: 'black', marginLeft: 100 }} />
            <div style={{ width: 10, height: 300, marginLeft: 100, background: "black" }} />
            <div style={{ width: 250, height: 10, background: "black" }} />
        </div>
    )
}

export default HangmanDrawing