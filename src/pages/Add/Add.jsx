import Modal from "../../components/Modal/Modal";
import { useSelector, useDispatch } from "react-redux";
import { IoMdClose } from "react-icons/io";
import img from "/public/shelter11.jpeg";
import {
  Shelter,
  addUserpost,
  homeless,
  missing,
  work,
} from "../../AddReducer/AddReducer";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Add = () => {
  const userInfo=useSelector((state)=>state.Adduser.userInfo)
  console.log("userinfo",userInfo[0].id)
  const navgate = useNavigate();
  const dispatch = useDispatch();
  // Add post
  const [addpost, setaddpost] = useState(false);
  const [despost, setdespost] = useState("");
  const [error, seterror] = useState({ despost: "" });
  const titledes = useSelector((state) => state.Addfeed.addpost);

  const hundelsubmitfeed = (e) => {
    e.preventDefault();
    let newErrors = { despost: "" };
    if (despost == "") {
      newErrors.despost = "Please Enter Your Post";
      seterror(newErrors);
    }
    if (despost !== "") {
      dispatch(addUserpost({ id: titledes.length + 1, postt: despost }));
      navgate("/dashboard/feed");
      //seterror({ despost: '' });
      setdespost("");
      setaddpost(false);
    }
    const data = {
      title: despost,
      content: despost,
      userId: userInfo[0].id,
    };
    axios
      .post("https://homecompass.runasp.net/post", data)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Add shelter
  const stylee = `focus:outline-Orange px-2 py-1 rounded-md  border border-basic w-[300px] mb-2 `;
  const [addShelter, setShelter] = useState(false);
  const [nameshelter, setnameshelter] = useState("");
  const [addres, setaddres] = useState("");
  const [targetshelter, settargetShelter] = useState("");
  const [desc, setdesc] = useState("");

  const [Phone, setphone] = useState("");
  const [errors, seterrors] = useState({
    name: "",
    target: "",
    addres: "",
    desc: "",
    Phone: "",
  });
  const addshelter = useSelector((state) => state.Addfeed.addShelter);

  // submit for shelter

  const hundelsubmitshelter = (e) => {
    e.preventDefault();
    let newErrors = {
      name: "",
      target: "",
      addres: "",
      desc: "",
      Phone: "",
    };

    if (nameshelter == "") {
      newErrors.name = "Please Enter Your Name";
    }
    if (targetshelter == "") {
      newErrors.target = "Please Enter Your Target";
    }
    if (addres == "") {
      newErrors.addres = "Please Enter Your Address";
    }

    if (desc == "") {
      newErrors.desc = "Please Enter a Description";
    }

    if (Phone == "") {
      newErrors.Phone = "Please Enter Your phone Number";
    }

    seterrors(newErrors);

    if (addres && desc && nameshelter && targetshelter) {
      dispatch(
        Shelter({
          id: addshelter.length + 1,
          addrese: addres,
          target: targetshelter,
          name: nameshelter,
          description: desc,
          phone: Phone,
        })
      );
      navgate("/dashboard/shelter");
      setaddres("");
      setdesc("");
      setphone("");
      setnameshelter("");
      settargetShelter("");

      setShelter(false);
    }

    const data = {
      name: nameshelter, // Ensure this matches your actual variable name
      location: addres, // Ensure this matches your actual variable name
      description: desc, // Corrected from 'descrption' to 'description'
      categoryId: addshelter.length + 1, // Provide a valid categoryId
      target: targetshelter, // Ensure this matches your actual variable name
      resources: [
        {
          name: "Resource Name", // Provide a valid resource name
          isAvailable: true,
        },
      ],
      days: [
        "Monday",
        "Tuesday", // Provide valid days
      ],
      hours: 8, // Provide valid hours
      photoUrl: img, // Provide a valid photo URL
      contactInformation: Phone, // Corrected from 'contactInformaton' to 'contactInformation'
      contributorId: userInfo[0].id, // Ensure this ID exists in the backend
    };

    axios
      .post("https://homecompass.runasp.net/Facility", data)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.error("Error:", err.response ? err.response.data : err.message);
      });
  };

  // add work
  const [addWork, setaddWork] = useState(false);
  const [namejob, setnamejob] = useState("");
  const [descrptionwork, setdescrptionwork] = useState("");
  const [workaddrese, setworkaddrese] = useState("");
  const [workemail, setworkemail] = useState("");
  const [Workhour, setWorkhour] = useState("");
  const [Salary, setSalary] = useState("");
  const [skills, setskills] = useState("");
  const [errorwork, seterrorwork] = useState({
    namejob: "",
    descrptionwork,
    workaddrese: "",
    workemail: "",
    Workhour: "",
    skills: "",
    Salary: "",
  });
  const addwork = useSelector((state) => state.Addfeed.addwork);
  // submit for work
  const hundelsubmitwork = async (e) => {
    e.preventDefault();
    let newErrors = {
      namejob: "",
      descrptionwork: "",
      workaddrese: "",
      workemail: "",
      Workhour: "",
      skills: "",
      Salary: "",
    };

    if (namejob == "") {
      newErrors.namejob = "Please enter your name job";
    }
    if (descrptionwork == "") {
      newErrors.descrptionwork = "Please enter Description";
    }

    if (workaddrese == "") {
      newErrors.workaddrese = "Please enter a Addrese";
    }

    if (workemail == "") {
      newErrors.workemail = "Please enter your Email";
    }
    if (Workhour == "") {
      newErrors.Workhour = "Please enter your phone number";
    }
    if (skills == "") {
      newErrors.skills = "Please enter your Skils";
    }
    if (Salary == "") {
      newErrors.Salary = "Please enter your Salary";
    }

    seterrorwork(newErrors);

    if (
      namejob &&
      descrptionwork &&
      workaddrese &&
      workemail &&
      Workhour &&
      skills &&
      Salary
    ) {
      dispatch(
        work({
          id: addshelter.length + 1,
          name: namejob,
          description: descrptionwork,
          workaddrese: workaddrese,
          workemail: workemail,
          Workhour: Workhour,
          skills: skills,
          Salary: Salary,
        })
      );
      navgate("/dashboard/Works");
      setnamejob("");
      setdescrptionwork("");
      setworkaddrese("");
      setworkemail("");
      setWorkhour("");
      setSalary("");
      setskills("");
      setaddWork(false);
    }
    const data = {
      title: namejob,
      description: descrptionwork,
      location: workaddrese,
      workHours: Workhour,
      salary: Salary,
      contactInformation: workemail,
      contributorId: userInfo[0].id,
      categoryId: addwork.length + 1,
    };
    await axios
      .post("https://homecompass.runasp.net/Job", data)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.error("Error:", err.response ? err.response.data : err.message);
      });
  };

  // add missing
  const [addMissing, setAddMissing] = useState(false);
  const [name, setname] = useState("");
  const [age, setAge] = useState("");
  const [homeAddress, sethomeAddress] = useState("");
  const [contactNumber, setcotactNumber] = useState("");
  const [physicalDescription, setphysicalDescription] = useState("");
  const [gender, setgender] = useState("");
  const [missinglocation, setMissinglocation] = useState("");
  const [missingsince, setmissingsince] = useState("");
  const [missingErrors, setMissingErrors] = useState({
    name: "",
    age: "",
    homeaddress: "",
    contactNumber: "",
    gender: "",
    physicalDescription: "",
    missinglocation: "",
    missingsince: "",
  });

  const addmising = useSelector((state) => state.Addfeed.addmissing);

  const handleMissingSubmit = (e) => {
    e.preventDefault();
    let newErrors = {
      name: "",
      age: "",
      homeaddress: "",
      contactNumber: "",
      gender: "",
      physicalDescription: "",
      missinglocation: "",
      missingsince: "",
    };

    if (name === "") {
      newErrors.name = "Please Enter Your Name";
    }
    if (physicalDescription === "") {
      newErrors.physicalDescription = "Please Enter description";
    }
    if (age === "") {
      newErrors.age = "Please Enter Age";
    }
    if (homeAddress === "") {
      newErrors.homeaddress = "Please Enter Home Address";
    }
    if (gender === "") {
      newErrors.gender = "Please Enter the gender";
    }
    if (contactNumber === "") {
      newErrors.contactNumber = "Please Enter Your Phone";
    }
    if (missinglocation === "") {
      newErrors.missinglocation = "Please Enter Location";
    }
    if (missingsince === "") {
      newErrors.missingsince = "Please Enter Time of mising ";
    }

    setMissingErrors(newErrors);

    if (
      name &&
      physicalDescription &&
      gender &&
      age &&
      homeAddress &&
      contactNumber &&
      missinglocation &&
      missingsince
    ) {
      dispatch(
        missing({
          id: addmising.length + 1,
          name: name,
          missingDescription: physicalDescription,
          age: age,
          gender: gender,
          contactNumber: contactNumber,
          homeAddress: homeAddress,
          missinglocation: missinglocation,
          missingsince: missingsince,
        })
      );
      navgate("/dashboard/missingpeople");
      setname("");
      setphysicalDescription("");
      setAge("");
      setcotactNumber("");
      setgender("");
      sethomeAddress("");
      setMissinglocation("");
      setmissingsince("");
      setAddMissing(false);
    }

    const data = {
      FullName: name,
      age: age,
      gender: gender,
      lastKnownLocation: missingsince,
      physicalDescription: physicalDescription,
      contactNumber: contactNumber,
      homeAddress: homeAddress,
      reporterId: addmising.length + 1,
      contributorId: "df864a81-c1cc-460a-9fc5-50f12d370ac9",
    };
    axios
      .post("https://homecompass.runasp.net/Missing", data)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.error("Error:", err.response ? err.response.data : err.message);
      });
  };
  //Add Homeless
  const [addHomeless, setaddHomeless] = useState(false);
  const [nameHomeless, setnameHomeless] = useState("");
  const [homelessdes, sethomelessdes] = useState("");
  const [homelessloc, sethomelessloc] = useState("");
  const [homelessgender, sethomelessgender] = useState("");
  const [homelesserr, sethomelesserr] = useState({
    nameHomeless: "",
    homelessdes: "",
    homelessloc: "",
    homelessgender: "",
  });
  const addhomeless = useSelector((state) => state.Addfeed.addhomeless);
  const handleHomelessSubmit = (e) => {
    e.preventDefault();
    let newErrors = {
      nameHomeless: "",
      homelessdes: "",
      homelessloc: "",
      homelessgender: "",
    };

    if (nameHomeless === "") {
      newErrors.nameHomeless = "Please Enter Your Name";
    }
    if (homelessdes === "") {
      newErrors.homelessdes = "Please Enter description";
    }
    if (homelessloc === "") {
      newErrors.homelessloc = "Please Enter Location";
    }
    if (homelessgender === "") {
      newErrors.homelessgender = "Please Enter Location";
    }

    sethomelesserr(newErrors);

    if (nameHomeless && homelessdes && homelessloc && homelessgender) {
      dispatch(
        homeless({
          id: addhomeless.length + 1,
          name: nameHomeless,
          description: homelessdes,
          location: homelessloc,
          gender : homelessgender,
        })
      );
      navgate("/dashboard/homeless");
      setnameHomeless("");
      sethomelessdes("");
      sethomelessloc("");
      sethomelessgender("");
      setaddHomeless(false);
    }
    const data = {
      fullName: nameHomeless,
      age :'0',
      gender :homelessgender,
      currentLocation: homelessloc,
      additionalDetails: homelessdes,
      archived :"true",
      //contactNumber: contactNumber,
      // homeAddress: homeAddress,
      // reporterId: addhomeless.length + 1,
      // contributorId: "df864a81-c1cc-460a-9fc5-50f12d370ac9",
      skills: [
        
           "Resource Name", // Provide a valid resource name
          
        
      ],
      healthCondition :"good",
      phoneNumber :"010022",
      photoUrl: img,
      reporterId: userInfo[0].id,
    };
    axios
      .post("https://homecompass.runasp.net/homeless", data)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.error("Error:", err.response ? err.response.data : err.message);
      });
  };

  return (
    <div>
      <div className="w-[120px] md:w-[300px] bg-white flex gap-4 flex-col p-4 rounded-lg">
        <h1 className="text-center font-bold text-basic text-xl">Add</h1>
        <div className="flex justify-center  flex-wrap gap-4">
          <button
            className="bg-Orange  text-white px-2 md:px-6 py-2 rounded-lg "
            onClick={() => setShelter((prev) => !prev)}
          >
            Shelter
          </button>
          <button
            className="bg-Orange  text-white px-2 md:px-6 py-2 rounded-lg "
            onClick={() => setaddWork((prev) => !prev)}
          >
            Work
          </button>

          <div
            className="bg-Orange   text-white cursor-pointer px-4 md:px-6 py-2 rounded-lg "
            onClick={() => setaddpost((prev) => !prev)}
          >
            Post
          </div>
          <button
            className="bg-Orange  text-white px-2 md:px-6 py-2 rounded-lg "
            onClick={() => setAddMissing((prev) => !prev)}
          >
            Mising
          </button>
          <button
            className="bg-Orange  text-white px-2 md:px-6 py-2 rounded-lg "
            onClick={() => setaddHomeless((prev) => !prev)}
          >
            Homeless
          </button>
        </div>
      </div>

      {addpost ? (
        <Modal>
          <div className="bg-white w-11/12 sm:w-[600px] text-center p-5 rounded-lg h-[200px] flex flex-col items-center justify-center relative  flex-nowrap ">
            <button
              className="absolute top-5 right-5 text-basic"
              onClick={() => setaddpost(false)}
            >
              <IoMdClose size={25} />
            </button>
            <h1 className="text-[30px] text-Orange">Add Your Post </h1>
            <div className="  gap-5 mt-5">
              <form
                onSubmit={hundelsubmitfeed}
                className="flex flex-row items-center justify-center gap-2"
              >
                <div className="flex flex-col justify-center ite">
                  <input
                    type="text"
                    onChange={(e) => {
                      setdespost(e.target.value);
                      seterror({ despost: "" });
                    }}
                    className="focus:outline-Orange px-2 py-2 rounded-sm  border border-basic w-[300px]"
                    placeholder="Add Your Post.."
                  />

                  {error.despost && (
                    <span className="text-red-500">{error.despost}</span>
                  )}
                </div>

                <button className="bg-Orange text-white rounded-lg px-6 py-2">
                  Add
                </button>
              </form>
            </div>
          </div>
        </Modal>
      ) : null}

      {/* Add shelter */}
      {addShelter ? (
        <Modal>
          <div className="bg-white w-[350px] sm:w-[600px] text-center p-5 rounded-lg  flex flex-col items-center justify-center relative  ">
            <button
              className="absolute top-5 right-5 text-basic"
              onClick={() => setShelter(false)}
            >
              <IoMdClose size={25} />
            </button>
            <h1 className="text-[30px] text-Orange">Add Shelter </h1>
            <div className="  mt-5">
              <form onSubmit={hundelsubmitshelter} className="  gap-3">
                <div className="flex flex-col justify-start items-start    ">
                  <label className="font-bold text-basic mb-2">
                    {" "}
                    Shelter Name
                  </label>
                  <input
                    type="text"
                    onChange={(e) => {
                      setnameshelter(e.target.value);
                      seterrors({ name: "" });
                    }}
                    placeholder="Enter Shelter Name"
                    className={stylee}
                  />

                  {errors.addres && (
                    <span className="text-red-500">{errors.name}</span>
                  )}
                  <label className="font-bold text-basic mb-2">Target</label>
                  <input
                    type="text"
                    onChange={(e) => {
                      settargetShelter(e.target.value);
                      seterrors({ target: "" });
                    }}
                    placeholder="Enter your Target"
                    className={stylee}
                  />

                  {errors.target && (
                    <span className="text-red-500">{errors.target}</span>
                  )}
                  <label className="font-bold text-basic mb-2">
                    {" "}
                    your Address
                  </label>
                  <input
                    type="text"
                    onChange={(e) => {
                      setaddres(e.target.value);
                      seterrors({ addres: "" });
                    }}
                    placeholder="Enter your Address"
                    className={stylee}
                  />

                  {errors.addres && (
                    <span className="text-red-500">{errors.addres}</span>
                  )}

                  <label className="font-bold text-basic mb-2">
                    {" "}
                    Describtion{" "}
                  </label>
                  <input
                    type="text"
                    onChange={(e) => {
                      setdesc(e.target.value);
                      seterrors({ desc: "" });
                    }}
                    placeholder="Enter your Describtion"
                    className={stylee}
                  />
                  {errors.desc && (
                    <span className="text-red-500">{errors.desc}</span>
                  )}

                  <label className="font-bold text-basic mb-2"> Phone </label>
                  <input
                    type="text"
                    onChange={(e) => {
                      setphone(e.target.value);
                      seterrors({ Phone: "" });
                    }}
                    placeholder="Enter your phone"
                    className={stylee}
                  />
                  {errors.Phone && (
                    <span className="text-red-500">{errors.Phone}</span>
                  )}
                  <div>
                    <button className="px-6 py-2 rounded-md text-white bg-Orange mt-1">
                      Add
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </Modal>
      ) : null}
      {addWork ? (
        <Modal>
          <div className="bg-white w-[320px] sm:w-[550px] text-center p-5 rounded-lg  flex flex-col items-center justify-center relative  ">
            <button
              className="absolute top-5 right-5 text-basic"
              onClick={() => setaddWork(false)}
            >
              <IoMdClose size={25} />
            </button>
            <h1 className="text-[30px] text-Orange">Add Work </h1>
            <div className="  mt-4">
              <form onSubmit={hundelsubmitwork} className="  gap-3">
                <div className="flex flex-col justify-start items-start    ">
                  <label className="font-bold text-basic mb-2"> NAME JOb</label>
                  <input
                    type="text"
                    onChange={(e) => {
                      setnamejob(e.target.value);
                      seterrorwork({ namejob: "" });
                    }}
                    placeholder="Enter your job"
                    className={stylee}
                  />

                  {errorwork.namejob && (
                    <span className="text-red-500">{errorwork.namejob}</span>
                  )}
                  <label className="font-bold text-basic mb-2">
                    {" "}
                    Description
                  </label>
                  <input
                    type="text"
                    onChange={(e) => {
                      setdescrptionwork(e.target.value);
                      seterrorwork({ descrptionwork: "" });
                    }}
                    placeholder="Enter Description"
                    className={stylee}
                  />

                  {errorwork.descrptionwork && (
                    <span className="text-red-500">
                      {errorwork.descrptionwork}
                    </span>
                  )}

                  <label className="font-bold text-basic mb-2"> Address </label>
                  <input
                    type="text"
                    onChange={(e) => {
                      setworkaddrese(e.target.value);
                      seterrorwork({ workaddrese: "" });
                    }}
                    placeholder="Enter your Address"
                    className={stylee}
                  />
                  {errorwork.workaddrese && (
                    <span className="text-red-500">
                      {errorwork.workaddrese}
                    </span>
                  )}

                  <label className="font-bold text-basic mb-2"> Email </label>
                  <input
                    type="text"
                    onChange={(e) => {
                      setworkemail(e.target.value);
                      seterrorwork({ workemail: "" });
                    }}
                    placeholder="Enter your Email"
                    className={stylee}
                  />
                  {errorwork.workemail && (
                    <span className="text-red-500">{errorwork.workemail}</span>
                  )}

                  <label className="font-bold text-basic mb-2">
                    {" "}
                    work hours{" "}
                  </label>
                  <input
                    type="text"
                    onChange={(e) => {
                      setWorkhour(e.target.value);
                      seterrorwork({ Workhour: "" });
                    }}
                    placeholder="Enter your work hours"
                    className={stylee}
                  />
                  {errorwork.Workhour && (
                    <span className="text-red-500">{errorwork.Workhour}</span>
                  )}
                  <label className="font-bold text-basic mb-2"> salary </label>
                  <input
                    type="text"
                    onChange={(e) => {
                      setSalary(e.target.value);
                      seterrorwork({ Salary: "" });
                    }}
                    placeholder="Enter your salary"
                    className={stylee}
                  />
                  {errorwork.Salary && (
                    <span className="text-red-500">{errorwork.Salary}</span>
                  )}
                  <label className="font-bold text-basic mb-2"> Skils </label>
                  <input
                    type="text"
                    onChange={(e) => {
                      setskills(e.target.value);
                      seterrorwork({ skills: "" });
                    }}
                    placeholder="Enter your Skils"
                    className={stylee}
                  />
                  {errorwork.skills && (
                    <span className="text-red-500">{errorwork.skills}</span>
                  )}
                  <div>
                    <button className="px-6 py-2 rounded-md text-white bg-Orange mt-1">
                      Add
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </Modal>
      ) : null}
      {/* add mising */}
      {addMissing ? (
        <Modal>
          <div className="bg-white w-[320px] sm:w-[550px] text-center p-5 rounded-lg  flex flex-col items-center justify-center relative  ">
            <button
              className="absolute top-5 right-5 text-basic"
              onClick={() => setAddMissing(false)}
            >
              <IoMdClose size={25} />
            </button>
            <h1 className="text-[30px] text-Orange">Add Missing People </h1>
            <div className="  mt-4">
              <form onSubmit={handleMissingSubmit} className="  gap-3">
                <div className="flex flex-col justify-start items-start    ">
                  <label className="font-bold text-basic mb-2">Name</label>
                  <input
                    type="text"
                    onChange={(e) => {
                      setname(e.target.value);
                      setMissingErrors({ name: "" });
                    }}
                    placeholder="Enter your Name"
                    className={stylee}
                  />

                  {missingErrors.name && (
                    <span className="text-red-500">{missingErrors.name}</span>
                  )}
                  <label className="font-bold text-basic mb-2">
                    {" "}
                    Description
                  </label>
                  <input
                    type="text"
                    onChange={(e) => {
                      setphysicalDescription(e.target.value);
                      setMissingErrors({ missingDescription: "" });
                    }}
                    placeholder="Enter Description"
                    className={stylee}
                  />

                  {missingErrors.missingDescription && (
                    <span className="text-red-500">
                      {missingErrors.missingDescription}
                    </span>
                  )}
                  <label className="font-bold text-basic mb-2">Age</label>
                  <input
                    type="text"
                    onChange={(e) => {
                      setAge(e.target.value);
                      setMissingErrors({ age: "" });
                    }}
                    placeholder="Enter the age"
                    className={stylee}
                  />

                  {missingErrors.age && (
                    <span className="text-red-500">{missingErrors.age}</span>
                  )}
                  <label className="font-bold text-basic mb-2">Gender</label>
                  <input
                    type="text"
                    onChange={(e) => {
                      setgender(e.target.value);
                      setMissingErrors({ gender: "" });
                    }}
                    placeholder="Enter the gender"
                    className={stylee}
                  />

                  {missingErrors.gender && (
                    <span className="text-red-500">{missingErrors.gender}</span>
                  )}
                  <label className="font-bold text-basic mb-2">Phone</label>
                  <input
                    type="text"
                    onChange={(e) => {
                      setcotactNumber(e.target.value);
                      setMissingErrors({ contactNumber: "" });
                    }}
                    placeholder="Enter your Phone"
                    className={stylee}
                  />

                  {missingErrors.contactNumber && (
                    <span className="text-red-500">
                      {missingErrors.contactNumber}
                    </span>
                  )}

                  <label className="font-bold text-basic mb-2">
                    {" "}
                    Location of missing{" "}
                  </label>
                  <input
                    type="text"
                    onChange={(e) => {
                      setMissinglocation(e.target.value);
                      setMissingErrors({ missinglocation: "" });
                    }}
                    placeholder="Enter your Location"
                    className={stylee}
                  />
                  {missingErrors.missinglocation && (
                    <span className="text-red-500">
                      {errorwork.missinglocation}
                    </span>
                  )}

                  <label className="font-bold text-basic mb-2">
                    {" "}
                    Missing Since{" "}
                  </label>
                  <input
                    type="text"
                    onChange={(e) => {
                      setmissingsince(e.target.value);
                      setMissingErrors({ missingsince: "" });
                    }}
                    placeholder="Missing Since"
                    className={stylee}
                  />
                  {missingErrors.missingsince && (
                    <span className="text-red-500">
                      {missingErrors.missingsince}
                    </span>
                  )}

                  <div>
                    <button className="px-6 py-2 rounded-md text-white bg-Orange mt-1">
                      Add
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </Modal>
      ) : null}
      {/* Add Homeless */}
      {addHomeless ? (
        <Modal>
          <div className="bg-white w-[320px] sm:w-[550px] text-center p-5 rounded-lg  flex flex-col items-center justify-center relative  ">
            <button
              className="absolute top-5 right-5 text-basic"
              onClick={() => setaddHomeless(false)}
            >
              <IoMdClose size={25} />
            </button>
            <h1 className="text-[30px] text-Orange">Add Homeless People </h1>
            <div className="  mt-4">
              <form onSubmit={handleHomelessSubmit} className="  gap-3">
                <div className="flex flex-col justify-start items-start    ">
                  <label className="font-bold text-basic mb-2">
                    {" "}
                    Your Name
                  </label>
                  <input
                    type="text"
                    onChange={(e) => {
                      setnameHomeless(e.target.value);
                      sethomelesserr({ nameHomeless: "" });
                    }}
                    placeholder="Enter your Name"
                    className={stylee}
                  />

                  {homelesserr.nameHomeless && (
                    <span className="text-red-500">
                      {homelesserr.nameHomeless}
                    </span>
                  )}
                  <label className="font-bold text-basic mb-2">
                    {" "}
                    Description
                  </label>
                  <input
                    type="text"
                    onChange={(e) => {
                      sethomelessdes(e.target.value);
                      sethomelesserr({ homelessdes: "" });
                    }}
                    placeholder="Enter Description"
                    className={stylee}
                  />

                  {homelesserr.homelessdes && (
                    <span className="text-red-500">
                      {homelesserr.homelessdes}
                    </span>
                  )}

                  <label className="font-bold text-basic mb-2">
                    {" "}
                    Location{" "}
                  </label>
                  <input
                    type="text"
                    onChange={(e) => {
                      sethomelessloc(e.target.value);
                      sethomelesserr({ homelessloc: "" });
                    }}
                    placeholder="Enter your Location"
                    className={stylee}
                  />
                  {homelesserr.homelessloc && (
                    <span className="text-red-500">
                      {homelesserr.homelessloc}
                    </span>
                  )}
                  <label className="font-bold text-basic mb-2">
                    {" "}
                    Gender{" "}
                  </label>
                  <input
                    type="text"
                    onChange={(e) => {
                      sethomelessgender(e.target.value);
                      sethomelesserr({ homelessgender: "" });
                    }}
                    placeholder="Enter your Location"
                    className={stylee}
                  />
                  {homelesserr.homelessgender && (
                    <span className="text-red-500">
                      {homelesserr.homelessgender}
                    </span>
                  )}

                  <div>
                    <button className="px-6 py-2 rounded-md text-white bg-Orange mt-1">
                      Add
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </Modal>
      ) : null}
    </div>
  );
};

export default Add;
