import Image from 'next/image'
import styles from './page.module.css'
import Cover from './components/Cover'
import JobSteps from './components/JobSteps'
import RecrutingOption from './components/RecrutingOption'

export default function Home() {
  return (
    <>
    <div>
      <Cover />
      <JobSteps /> 
      <RecrutingOption />
    </div>
      
    </>
  )
}
