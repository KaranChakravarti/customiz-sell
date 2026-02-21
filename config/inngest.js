import {inngest } from "inngest";
import connectDB from "./db";

export const inngest = new inngest({id: "Customize-sell"});

// inngest function to save user data to database

export const syncUserCreation = inngest.createFunction(
    {
        id:'sync-userfrom-clerk'
    },
    {
        event: 'clerk/user.created'},
    async ({event})=>{
        const {id, first_name, last_name, email_addresses, image_url} = event.data;
        const userData = {
            _id: id,
            email: email_addresses[0].email_address,
            name: `${first_name} +'' + ${last_name}`,
            image: image_url
        }
        await connectDB()
        await User.create(userData)
        // save userData to database
    }
)
export const synUserUpdation = inngest.createFunction(
    {
        id: 'update-user-from-clerk'
    },
    {
        event: 'clerk/user.updated'
    },
    async ({event})=>{
        const {id, first_name, last_name, email_addresses, image_url} = event.data;
        const userData = {
            _id: id,
            email: email_addresses[0].email_address,
            name: `${first_name} +'' + ${last_name}`,
            image: image_url
        }
        await connectDB()
        await User.findByIdAndUpdate({_id: id}, userData)
        // update userData in database
    }
)     

// Ingest function to delete user from database

export const syncUserDeletion = inngest.createFunction(
    {
        id: 'delete-user-from-clerk'
    },
    {
        event: 'clerk/user.deleted'
    },
    async ({event})=>{
        const {id} = event.data;
        await connectDB()
        await User.findByIdAndDelete({_id: id})
        // delete user from database
    }
)     
