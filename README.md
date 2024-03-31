# Project - Roc8 (March) 

Assignment for Roc8 (March)

### Live Link: [Roc8 March]()

## Installation

To clone and run this project locally:

1. Clone the repository:
    ```bash
    git clone https://github.com/rayyan016/Roc8-March-Ecommerce.git
    ```
    

2. Navigate to the project directory:  
    ```bash
    cd Roc8-March-Ecommerce
    ```
    

3. Install the dependencies:
    ```bash
    yarn
    ```

4. Rename `.env.example` to `.env` and specify the variables.

5. Run the development server:
    ```bash
    yarn dev
    ```

6. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.



    
## Technologies Used
- Next.js
- Typescript
- Prisma
- PostgreSQL (Neon)
- Tailwind CSS
- Faker.js


## Approach


To develop the four screens based on designs in Figma, I have used the T3 stack replacing the API approach with Next.js API routes. Tailwind CSS is used for styling, PostgreSQL hosted by Neon as database and Prisma is used as an ORM for database interactions. Alongwith Next.js.

First the signup screen, which required users to enter their email, password, and name. Upon submission, the users are led to an OTP screen. To implement this, an eight-digit OTP was generated and NodeMailer was used to send the otp to the user's email. This OTP, along with the user's email, was stored in the PostgreSQL database using Prisma for future verification.

Once the user received the OTP and provided the same on the OTP screen, a verification process ensued. If successful, a toast indicated the OTP was verified; otherwise, a toast informed the user of verification failure. Successful verification redirected users to the login screen.

On the login screen, users were prompted to enter their email and password. These credentials were then verified against the stored data in the database. If matched, the user was directed to a protected route named "choices" that could not be accessed without logging in. This choices screen displayed a list of categories generated with Faker.js. The list is a paginated list. Users could select a category, which was then saved to the database. Upon returning after logging out, selected categories were retrieved and displayed to the user, ensuring a personalized experience.