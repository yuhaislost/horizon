
export default function PathItems(props: { index: number; top: any }) {
    const { index, top } = props
    return (
        <>
            {index === 1 ?
                <svg className={`right-[300px] top-[${top}px] absolute`} width="124" height="137" viewBox="0 0 124 137" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M122 -47.0001C114.239 -18.9765 121.853 23.3993 101.944 38.722C77.3857 57.6225 58.0926 -1.62995 10.4006 56.116C-0.0576821 68.779 -3.9774 100.947 23.0002 136" stroke="#161928" stroke-width="3" />
                </svg> : index === 2 ?
                    <svg className={`right-[300px] top-[${top}px] absolute`} width="188" height="80" viewBox="0 0 188 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M186.458 2.00004C163.958 18.0001 144.78 53 120.458 53C90.4585 53 110.642 -0.767623 39.9585 14.5C24.4585 17.848 2.4585 39 2.4585 79.5" stroke="#161928" stroke-width="3" />
                    </svg> : index === 3 ?
                        <svg y={top} className="right-[400px] absolute" width="137" height="167" viewBox="0 0 137 167" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.45875 1.9999C21.5933 19.5387 51.032 28.4095 62.8572 52.2897C77.4434 81.7456 36.7308 77.2292 79.8717 142.286C89.3319 156.552 112.184 172.134 135.459 160.609" stroke="#161928" stroke-width="3" />
                        </svg> : index === 4 ?
                            <svg y={top} className="right-[400px] absolute" width="150" height="167" viewBox="0 0 150 167" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M148.458 1C130.605 35.271 115.387 110.239 96.0889 110.239C72.2846 110.239 88.2997 -4.92815 32.2139 27.7741C19.915 34.9453 2.4585 80.2516 2.4585 167" stroke="#161928" stroke-width="3" />
                            </svg> : index === 5 ?
                                <svg y={top} className="right-[400px] absolute" width="164" height="96" viewBox="0 0 164 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M162.631 94.0022C140.069 87.6107 111.495 92.4678 94.6719 77.2156C73.9202 58.4021 111.397 45.1213 55.8262 8.1599C43.6402 0.0547147 19.1714 -3.53786 1.45854 15.9998" stroke="#161928" stroke-width="3" />
                                </svg> :
                                <svg y={top} className="right-[400px] absolute" width="261" height="98" viewBox="0 0 261 98" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M259.661 13.4501C226.572 33.9013 193.004 84.8491 161.579 79.8205C122.816 73.6177 162.394 -6.56813 67.2313 2.77153C46.3632 4.8196 12.6267 33.4574 2.4586 97" stroke="#161928" stroke-width="3" />
                                </svg>
            }
        </>
    )}


