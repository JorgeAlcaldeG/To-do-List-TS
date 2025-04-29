type Props = {
    style:string // w-full cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-110 inline-block
}

export default function MoonIcon({style}: Props) {
  return (
    <svg width="50" height="50" viewBox="0 0 180 180" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={style}>
        <path d="M76.9151 0C37.4984 88.521 95.9878 140.742 178 109.537C176.104 132.463 157.02 153.779 144.941 162.395C63.9581 220.154 -33.7061 133.1 11.4325 42.6684C21.9224 21.6526 50.8603 1.91052 76.9151 0Z" fill="currentColor"/>
    </svg>
  )
}
