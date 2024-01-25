# Dimensionless Assignment

## Tech Stack/Libraries Used

1. **Vite:** A build tool for modern web projects, offering fast development and optimized builds.
2. **React:** A JavaScript library for building user interfaces.
3. **Tailwind CSS:** A utility-first CSS framework for rapidly building custom designs.
4. **Material UI:** A popular React UI framework with a set of components for faster and easier web development.
5. **Chart.js:** A simple yet flexible JavaScript charting library.

## Steps to Run/Build the Project

### Installation

Run the following command to install the necessary dependencies:

```bash
npm install
```

### Starting the Development Server

To start the app in development mode, run:

```bash
npm run dev
```

After starting the server, open [http://localhost:5173/](http://localhost:5173/) in your browser to view the app. The page will automatically reload if you make changes to the code. Lint errors, if any, will be displayed in the console.

### Building for Production

To build the app for production, use:

```bash
npm run build
```

This command will bundle React in production mode and optimize the build for the best performance. The build artifacts will be stored in the `build` folder, with filenames containing hashes. The app will be ready for deployment.

## Running the Project with Docker

### Prerequisites
- Ensure Docker is installed on your system.

### Docker Setup(Optional)

1. **Create a Dockerfile**: Place a Dockerfile in your project root with the following content:

    ```Dockerfile
    FROM node:latest
    WORKDIR /app
    COPY package*.json ./
    RUN npm install
    COPY . .
    EXPOSE 3000
    CMD [ "npm", "run", "dev" ]
    ```

2. **Build Docker Image**: Build an image from the Dockerfile:

    ```bash
    docker build -t dimensionless-assignment .
    ```

3. **Run the Container**: Start a container from the image:

    ```bash
    docker run -p 5173:3000 dimensionless-assignment
    ```

    This command maps port 3000 from the container to port 5173 on your host machine.

4. **Access the Application**: The app should be accessible at `http://localhost:5173`.


## GitHub Repository

[https://github.com/PranshuBasak/dimensionless_assignment.git](https://github.com/PranshuBasak/dimensionless_assignment.git)

## Deployed Link

[https://dimensionless.pranshubasak.co/](https://dimensionless.pranshubasak.co/)