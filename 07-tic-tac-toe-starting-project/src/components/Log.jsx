export default function Log() {
    return <ol id = "log">
        {turns.map(turn)}
    </ol>
}