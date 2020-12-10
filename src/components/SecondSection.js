import React, { Component } from 'react'
import '../styles/SecondSection.scss'
import { fetchProvinsi } from '../utill/fetch'
import { Center, Text } from '@chakra-ui/react'
import { Table, Thead, Tbody, Tr, Th, Td, TableCaption } from '@chakra-ui/table'
import CountUp from 'react-countup'


export default class SecondSection extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            provinsi: null
        }
    }

    async componentDidMount() {
        const data = await fetchProvinsi()
        this.setState({
            loading: false,
            provinsi: data
        })
        console.log(this.state.provinsi)
    }


    render() {
        return (
            <div style={{height: '100vh'}}>
                <Center>
                    <Text className='title' py={5}>Data Provinsi Indonesia</Text>
                </Center>
                <Center>
                    {this.state.loading == true ? <Text>Loading...</Text> : 
                        <Table variant='simple'>
                                <Thead>
                                    <Tr>
                                        <Th>Nama Provinsi</Th>
                                        <Th textAlign='center'>Terkonfirmasi</Th>
                                        <Th textAlign='center'>Dirawat</Th>
                                        <Th textAlign='center'>Sembuh</Th>
                                        <Th textAlign='center'>Meninggal</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {this.state.provinsi.map(item => (
                                        <Tr>
                                            <Th>{item.provinsi}</Th>
                                            <Th textAlign='center'><CountUp separator=',' className='countup' duration={1.5} end={item.kasus} /></Th>
                                            <Th textAlign='center'><CountUp separator=',' className='countup' duration={1.5} end={item.dirawat} /></Th>
                                            <Th textAlign='center'><CountUp separator=',' className='countup' duration={1.5} end={item.sembuh} /></Th>
                                            <Th textAlign='center'><CountUp separator=',' className='countup' duration={1.5} end={item.meninggal} /></Th>
                                        </Tr>
                                    ))}
                                </Tbody>
                        </Table>
                    }
                </Center>
            </div>
        )
    }
}
