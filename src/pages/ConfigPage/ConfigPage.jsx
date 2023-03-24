import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actFetchAllBanner, actUpdateBanner } from '../../redux/features/bannerSlice/bannerSlice'
import './ConfigPage.scss'

const ConfigPage = () => {
    const {banner} = useSelector((state) => state.banner)
    const dispatch = useDispatch()
    const [formState, setFormState] = useState(banner.banner)
    useEffect(() => {
        dispatch(actFetchAllBanner())
    },[])


    const handleSubmit =  (e) => {
        e.preventDefault()
        dispatch(actUpdateBanner(1, formState))
    }
    
   return (
    <div className='addnew-container'>
        <div className='top'>
            <h3>Config banner</h3>
        </div>
        <div className='main__form'>
            <form onSubmit={handleSubmit}>
                <div className="form-input">
                    <label>Image</label>
                    <input type="text" required name='image' value={formState} onChange={(e) => setFormState(e.target.value)}/>
                </div>
                <div className='form-btn'>
                <button type='submit' >Submit</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default ConfigPage