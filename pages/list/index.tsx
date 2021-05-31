import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
  } from "@chakra-ui/react"
import Header from '../../components/Header'

const Users = ({data}) => {
    
      return (
        <div>
              <Header/>
            <Table variant="simple">
                <TableCaption>All users in waiting list</TableCaption>
                <Thead>
                    <Tr>
                    <Th>Name</Th>
                    <Th>Number</Th>
                    <Th isNumeric>WaitingTime</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    
                    {
                          data.map( (row) => (
                            <Tr key={row._id}>
                                <Td>{row.name}</Td>
                                <Td>{row.number}</Td>
                                <Td isNumeric>{row.waitingTime}</Td>
                            </Tr>
                        ))
                    }
                </Tbody>
            </Table>
          </div>
      )
}


export async function getServerSideProps() {
    console.log("--getServerSideProps users--")
    /*let server = "http://localhost:3000"
    if(process.env.NODE_ENV !== 'production'){
        server = "https://n0q.herokuapp.com"
    }
    server = "https://n0q.herokuapp.com"*/
    const req = await fetch(`https://n0q.herokuapp.com/api/qrcodes`);
    const data = await req.json();
    
    return {
        props: { data: data },
    }
}

export default Users

  