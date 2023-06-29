import React from 'react'
import './section5.css'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';


function Section5() {
    return (
        <div className='section5'>
            <span>
                <tr className='section5-h'>
                    <th>Illum magnum aliquam </th>
                    {/* <th> </th> */}

                </tr>
                <tr>
                    <td>Ipsum Lorem</td>
                    <td>Ipsum Lorem</td>
                </tr>
                <tr>
                    <td>Ipsum Lorem</td>
                    <td>Ipsum Lorem</td>
                </tr>
                <tr>
                    <td>Ipsum Lorem</td>
                    <td>Ipsum Lorem</td>
                </tr>
                <tr>
                    <td>Ipsum Lorem</td>
                    <td>Ipsum Lorem</td>
                </tr>
            </span>
            <span>
                <tr className='section5-h'>
                    <th>Illum magnum aliquam </th>
                    {/* <th> </th> */}

                </tr>
                <tr>
                    <td>Ipsum Lorem</td>
                    <td>Ipsum Lorem</td>
                </tr>
                <tr>
                    <td>Ipsum Lorem</td>
                    <td>Ipsum Lorem</td>
                </tr>
                <tr>
                    <td>Ipsum Lorem</td>
                    <td>Ipsum Lorem</td>
                </tr>
                <tr>
                    <td>Ipsum Lorem</td>
                    <td>Ipsum Lorem</td>
                </tr>
            </span>
            <span className='last-column'>
                <tr className='section5-h'>
                    <th>Illum magnum aliquam </th>
                </tr>
                <tr >
                    <td className='last-column-r'><a href='#section1'><ShoppingCartOutlinedIcon /></a> <a href='#section1'>Lorem</a></td>
                </tr>
                <tr >
                    <td className='last-column-r'><a href='#section1'><ShoppingCartOutlinedIcon /></a> <a href='#section1'>Lorem</a></td>
                </tr>
                <tr >
                    <td className='last-column-r'><a href='#section1'><ShoppingCartOutlinedIcon /></a> <a href='#section1'>Lorem</a></td>
                </tr>
                <tr >
                    <td className='last-column-r'><a href='#section1'><ShoppingCartOutlinedIcon /></a> <a href='#section1'>Lorem</a></td>
                </tr>

            </span>
        </div>
    )
}

export default Section5
