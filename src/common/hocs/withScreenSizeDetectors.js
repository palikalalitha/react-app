import React from "react"
import {observable,computed,action} from "mobx";
import {observer} from "mobx-react"

function withScreenSizeDetectors(WrappedComponent)
{
   @observer
    class Toggle extends React.Component
    {
        @observable deviceWidth
        componentDidMount()
        {
            window.addEventListener('resize', this.reportWindowSize);
            this.reportWindowSize()

        }
        reportWindowSize=()=>
        {
            this.deviceWidth=window.innerWidth
        }
      @computed get isMobile()
        {
            if(this.deviceWidth <576)
            {
                return true
            }
            else
            {
                return false
            }
            
        }
       
        @computed get isTablet()
        {
            if (this.deviceWidth>= 576 && this.deviceWidth < 992)
            {
                return true
            }
            else
            {
                return false
            }
            

           

        }
        @computed get isDesktop()
        {
            if(this.deviceWidth >= 992)
            {
                return true;
            }
            else
            {
                return false
            }
           
        }
        componentWillMount()
        {
            window.removeEventListener('resize',this.reportWindowSize)
        }
        render()
        {
            return (<WrappedComponent 
                mobile={this.isMobile}
                 tablet={this.isTablet} 
                 desktop={this.isDesktop}
            />)
           }
    }
    return Toggle
}
export {withScreenSizeDetectors}