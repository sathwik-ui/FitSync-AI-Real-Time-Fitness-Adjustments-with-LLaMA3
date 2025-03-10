import React, { useState } from 'react'
import { Box, Paper, Typography, Grid, FormControl, InputLabel, Select, MenuItem, TextField, Button, Chip, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@mui/material'
import { Delete as DeleteIcon, Add as AddIcon } from '@mui/icons-material'

interface Exercise {
  name: string
  sets: number
  reps: number
  notes: string
}

const WorkoutPlanner: React.FC = () => {
  const [exercises, setExercises] = useState<Exercise[]>([])
  const [selectedExercise, setSelectedExercise] = useState('')
  const [sets, setSets] = useState('3')
  const [reps, setReps] = useState('10')
  const [notes, setNotes] = useState('')

  const availableExercises = [
    'Push-ups',
    'Squats',
    'Plank',
    'Diamond Push-ups',
    'Jump Squats',
    'Side Plank',
  ]

  const handleAddExercise = () => {
    if (selectedExercise) {
      setExercises([...exercises, {
        name: selectedExercise,
        sets: parseInt(sets),
        reps: parseInt(reps),
        notes: notes
      }])
      setSelectedExercise('')
      setNotes('')
    }
  }

  const handleRemoveExercise = (index: number) => {
    setExercises(exercises.filter((_, i) => i !== index))
  }

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Workout Planner
      </Typography>
      <Grid container spacing={3}>
        {/* Exercise Selection */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Add Exercise
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <FormControl fullWidth>
                <InputLabel>Exercise</InputLabel>
                <Select
                  value={selectedExercise}
                  label="Exercise"
                  onChange={(e) => setSelectedExercise(e.target.value)}
                >
                  {availableExercises.map((exercise) => (
                    <MenuItem key={exercise} value={exercise}>
                      {exercise}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    label="Sets"
                    type="number"
                    value={sets}
                    onChange={(e) => setSets(e.target.value)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    label="Reps"
                    type="number"
                    value={reps}
                    onChange={(e) => setReps(e.target.value)}
                  />
                </Grid>
              </Grid>
              <TextField
                fullWidth
                label="Notes"
                multiline
                rows={2}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
              <Button
                variant="contained"
                color="primary"
                startIcon={<AddIcon />}
                onClick={handleAddExercise}
                disabled={!selectedExercise}
              >
                Add Exercise
              </Button>
            </Box>
          </Paper>
        </Grid>

        {/* Workout Plan */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Your Workout Plan
            </Typography>
            <List>
              {exercises.map((exercise, index) => (
                <ListItem key={index} divider={index < exercises.length - 1}>
                  <ListItemText
                    primary={
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        {exercise.name}
                        <Chip
                          label={`${exercise.sets} sets × ${exercise.reps} reps`}
                          size="small"
                          color="primary"
                          variant="outlined"
                        />
                      </Box>
                    }
                    secondary={exercise.notes}
                  />
                  <ListItemSecondaryAction>
                    <IconButton
                      edge="end"
                      aria-label="delete"
                      onClick={() => handleRemoveExercise(index)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>
            {exercises.length > 0 && (
              <Box sx={{ mt: 2 }}>
                <Button variant="contained" color="primary" fullWidth>
                  Save Workout Plan
                </Button>
              </Box>
            )}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  )
}

export default WorkoutPlanner