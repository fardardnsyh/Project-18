import { useEffect } from 'react'
import { useAppContext } from '../../Context/appContext'
import { Loading, StatsContainer, ChartsContainer } from '../../Components'

const Stats = () => {
    const { showStats, isLoading, monthlyApplications } = useAppContext()
    useEffect(() => {
        showStats()
        // eslint-disable-next-line
    }, [])

    if (isLoading) {
        return <Loading center />
    }

    return (
        <>
            <StatsContainer />
            {monthlyApplications.length > 0 && <ChartsContainer />}
        </>
    )
}

export default Stats
