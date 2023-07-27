import { useState } from "react"
import Button from "../../ui/Button"
import CreateCabinForm from "./CreateCabinForm"
import Modal from "../../ui/Modal"


const AddCabin = () => {
  const [isOpenModal, setIsOpenModal] = useState(false)

  function handleClose() {
    setIsOpenModal(curr => !curr)
  }


  return (
    <>
      <Button onClick={() => setIsOpenModal(curr => !curr)}>Add new cabin</Button>
      {isOpenModal && <Modal onClose={handleClose}><CreateCabinForm onClose={handleClose} /></Modal>}
    </>
  )
}

export default AddCabin