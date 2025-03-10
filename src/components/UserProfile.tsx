import React, { useState } from 'react'
import { Box, Paper, Typography, Grid, TextField, Button, Avatar, Divider } from '@mui/material'
import { Edit as EditIcon, Save as SaveIcon } from '@mui/icons-material'

interface UserData {
  name: string
  age: number
  height: number
  weight: number
  email: string
}

const UserProfile: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false)
  const [userData, setUserData] = useState<UserData>({
    name: 'John Doe',
    age: 30,
    height: 175,
    weight: 70,
    email: 'john.doe@example.com'
  })

  const handleSave = () => {
    setIsEditing(false)
    // TODO: Implement API call to save user data
  }

  const handleChange = (field: keyof UserData) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({
      ...userData,
      [field]: event.target.value
    })
  }

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        User Profile
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2, textAlign: 'center' }}>
            <Avatar
              sx={{
                width: 120,
                height: 120,
                margin: '0 auto 16px',
                bgcolor: 'primary.main'
              }}
            >
              {userData.name.charAt(0)}
            </Avatar>
            <Typography variant="h6">{userData.name}</Typography>
            <Typography color="textSecondary">{userData.email}</Typography>
            <Button
              variant="outlined"
              color="primary"
              startIcon={isEditing ? <SaveIcon /> : <EditIcon />}
              onClick={() => isEditing ? handleSave() : setIsEditing(true)}
              sx={{ mt: 2 }}
            >
              {isEditing ? 'Save Changes' : 'Edit Profile'}
            </Button>
          </Paper>
        </Grid>

        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Personal Information
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Full Name"
                  value={userData.name}
                  onChange={handleChange('name')}
                  disabled={!isEditing}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Age"
                  type="number"
                  value={userData.age}
                  onChange={handleChange('age')}
                  disabled={!isEditing}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Email"
                  type="email"
                  value={userData.email}
                  onChange={handleChange('email')}
                  disabled={!isEditing}
                />
              </Grid>
            </Grid>

            <Divider sx={{ my: 3 }} />

            <Typography variant="h6" gutterBottom>
              Fitness Metrics
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Height (cm)"
                  type="number"
                  value={userData.height}
                  onChange={handleChange('height')}
                  disabled={!isEditing}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Weight (kg)"
                  type="number"
                  value={userData.weight}
                  onChange={handleChange('weight')}
                  disabled={!isEditing}
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  )
}

export default UserProfile