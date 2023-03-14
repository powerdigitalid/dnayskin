import FormInputCustomer from "../../../components/admin-pages/form-customer/formInputCustomer"
import TableCustomer from "../../../components/admin-pages/form-customer/tableCustomer";
import CardCustomer from "../../../components/admin-pages/form-customer/cardCustomer";
import Layout from "../../../components/admin-pages/utils/layout";

export default function Index(){
  return(
    <>
    <Layout>
      <FormInputCustomer />
      <TableCustomer />
    </Layout>
    </>
  )
}