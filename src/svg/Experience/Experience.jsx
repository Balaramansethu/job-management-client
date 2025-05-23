const Experience = ({ width = "40", height = "40", className = "" }) => {
    return (
        <svg
            width={width}
            height={height}
            className={className}
            viewBox='0 0 19 16'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                d='M11.7 14.75C11.7 12.7618 9.28233 11.15 6.29999 11.15C3.31766 11.15 0.899994 12.7618 0.899994 14.75M15.3 12.05V9.35M15.3 9.35V6.65M15.3 9.35H12.6M15.3 9.35H18M6.29999 8.45C4.31177 8.45 2.69999 6.83822 2.69999 4.85C2.69999 2.86177 4.31177 1.25 6.29999 1.25C8.28822 1.25 9.89999 2.86177 9.89999 4.85C9.89999 6.83822 8.28822 8.45 6.29999 8.45Z'
                stroke='#5A5A5A'
                stroke-width='1.6'
                stroke-linecap='round'
                stroke-linejoin='round'
            />
        </svg>
    )
}

export default Experience
