import { getUsers } from "@/actions/user";

export default async function UserList() {
  const users = await getUsers();
  return (
    <div className="bg-white my-10 p-5">
      <h2 className="text-gray-800">User List</h2>

      {users.length > 0 ? (
        users.map(({ email, id, name }, index) => (
          <div key={id} className="box-1  ">
            <p className="text-gray-800">
              <span>{index + 1}.</span>
              {email}. {name}
              <br />
            </p>
          </div>
        ))
      ) : (
        <div className="box-1">No user found!</div>
      )}
    </div>
  );
}
