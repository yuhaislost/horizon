/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { useAudio } from "react-use";

interface SoundTrackProviderProps{
    location: string;
}

export const SoundtrackProvider = ({ location } : SoundTrackProviderProps) => {
    const [soundtrack, _s, soundtrackControls] = useAudio({ src: location });

    return(
        <>
            {soundtrack}
        </>
    )
}