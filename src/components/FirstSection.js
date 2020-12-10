import React, { Component } from 'react'
import { Box, Center, Divider, Text } from '@chakra-ui/react'
import CountUp from 'react-countup'
import { fetchID, fetchGlobal } from '../utill/fetch'
import '../styles/FirstSection.scss'

export default class FirstSection extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading_id: true,
            terkonfirmasi_id: 0,
            dirawat_id: 0,
            sembuh_id: 0,
            meninggal_id: 0,
            lastUpdate_id: null,
            loading: true,
            terkonfirmasi: 0,
            sembuh: 0,
            meninggal: 0,
            lastUpdate: null
        }
    }

    async componentDidMount() {
        const data_id = await fetchID()
        const data_global = await fetchGlobal()

        await this.setState({
                loading_id: false,
                terkonfirmasi_id: data_id.positif,
                dirawat_id: data_id.dirawat,
                sembuh_id: data_id.sembuh,
                meninggal_id: data_id.meninggal,
                lastUpdate_id: data_id.lastUpdate,
                loading: false,
                terkonfirmasi: data_global.confirmed.value,
                sembuh: data_global.recovered.value,
                meninggal: data_global.deaths.value,
                lastUpdate: data_global.lastUpdate
        })
    }

    render() {
        return (
            <div style={{height: '100vh'}}>
                <section id='indonesia-part' style={{maxHeight: '50%'}}>
                    <Center><Text py={5} className='title'>Data COVID-19 Indonesia</Text></Center>
                    <Center height='25vh'>
                        <Box width='20%' textAlign='center'>
                            <Text className='box-title' color='yellow.500'>Terkonfirmasi</Text>
                            {this.state.loading_id == true ? <Text>Loading</Text> : <CountUp separator=',' className='countup' duration={1} style={{fontSize: '28pt', fontWeight: 'bold'}} end={this.state.terkonfirmasi_id} />}
                        </Box>
                        <Divider orientation='vertical'/>
                        <Box width='20%' textAlign='center'>
                            <Text className='box-title' color='orange.500'>Dirawat</Text>
                            {this.state.loading_id == true ? <Text>Loading</Text> : <CountUp separator=',' className='countup' duration={1} style={{fontSize: '28pt', fontWeight: 'bold'}} end={this.state.dirawat_id} />}
                        </Box>
                        <Divider orientation='vertical'/>
                        <Box width='20%' textAlign='center'>
                            <Text className='box-title' color='green.500'>Sembuh</Text>
                            {this.state.loading_id == true ? <Text>Loading</Text> : <CountUp separator=',' className='countup' duration={1} style={{fontSize: '28pt', fontWeight: 'bold'}} end={this.state.sembuh_id} />}
                        </Box>
                        <Divider orientation='vertical'/>
                        <Box width='20%' textAlign='center'>
                            <Text className='box-title' color='red.500'>Meninggal</Text>
                            {this.state.loading_id == true ? <Text>Loading</Text> : <CountUp separator=',' className='countup' duration={1} style={{fontSize: '28pt', fontWeight: 'bold'}} end={this.state.meninggal_id} />}
                        </Box>
                    </Center>
                    <Center><Text className='lastUpdate' py={5}>Pembaruan terakhir: {(new Date(this.state.lastUpdate_id)).toLocaleString()}</Text></Center>
                </section>
                <section className="dunia-part" style={{maxHeight: '50%'}}>
                    <Center><Text py={5} className='title'>Data COVID-19 DUNIA</Text></Center>
                    <Center height='25vh'>
                        <Box width='33.3%' textAlign='center'>
                            <Text className='box-title' color='yellow.500'>Terkonfirmasi</Text>
                            {this.state.loading == true ? <Text>Loading</Text> : <CountUp separator=',' className='countup' duration={1} style={{fontSize: '28pt', fontWeight: 'bold'}} end={this.state.terkonfirmasi} />}
                        </Box>
                        <Divider orientation='vertical'/>
                        <Box width='33.3%' textAlign='center'>
                            <Text className='box-title' color='green.500'>Sembuh</Text>
                            {this.state.loading == true ? <Text>Loading</Text> : <CountUp separator=',' className='countup' duration={1} style={{fontSize: '28pt', fontWeight: 'bold'}} end={this.state.sembuh} />}
                        </Box>
                        <Divider orientation='vertical'/>
                        <Box width='33.3%' textAlign='center'>
                            <Text className='box-title' color='red.500'>Meninggal</Text>
                            {this.state.loading == true ? <Text>Loading</Text> : <CountUp separator=',' className='countup' duration={1} style={{fontSize: '28pt', fontWeight: 'bold'}} end={this.state.meninggal} />}
                        </Box>
                    </Center>
                    <Center><Text className='lastUpdate' py={5}>Pembaruan terakhir: {(new Date(this.state.lastUpdate)).toLocaleString()}</Text></Center>
                </section>
            </div>
        )
    }
}
