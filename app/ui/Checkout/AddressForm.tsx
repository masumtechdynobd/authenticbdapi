
import CustomInput from '@/app/ui/CustomInput'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { useState } from 'react';

export default function AddressForm({ errors, setErrors, country, state, cities, formData, setFormData }: any) {




    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors({ ...errors, [name]: '' });
        }
    };
    // console.log(country)

    const handleSelectChange = (value: string) => {
        const existCountry = country.find((item: any) => item.id === value);
        if (existCountry) {
            setFormData({
                ...formData,
                country_id: value,
                country_name: existCountry.name
            });
            // Clear error when user selects a country
            if (errors.country_id) {
                setErrors({ ...errors, country_id: '' });
            }
        }
    };
    const handleSelectCities = (value: string) => {
        const existCities = cities.find((item: any) => item.id === value)
        if (existCities) {
            setFormData({
                ...formData,
                city_id: value,
                city_name: existCities.name
            });
        }
        // Clear error when user selects a country
        if (errors.city_id) {
            setErrors({ ...errors, city_id: '' });
        }

    };
    const handleSelectState = (value: string) => {
        const existState = state.find((item: any) => item.id === value)
        if (existState) {
            setFormData({
                ...formData,
                state_id: value,
                state_name: existState.name
            });
        }
        // Clear error when user selects a country
        if (errors.state_id) {
            setErrors({ ...errors, state_id: '' });
        }

    };
    return (
        <>

            {/* Country/Region */}
            <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Country/Region</label>
                <Select value={formData?.country_id} onValueChange={handleSelectChange}>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a country" />
                    </SelectTrigger>
                    <SelectContent>
                        {country.map((item: any) => (
                            <SelectItem key={item.id} value={item.id}>{item.name}</SelectItem>
                        ))}
                    </SelectContent>
                </Select>
                {errors.country_id && <p className="text-red-500 text-sm mt-1">{errors.country_id}</p>}
            </div>

            {/* Full Name */}
            <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Full Name</label>
                <CustomInput
                    name="fullName"
                    type="text"
                    placeholder="ex *"
                    className="w-full"
                    value={formData.fullName}
                    onChange={handleInputChange}
                />
                {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
            </div>

            {/* E-Mail */}
            <div className="mb-4 hidden">
                <label className="block text-sm font-medium mb-2">E-Mail</label>
                <CustomInput
                    name="email"
                    type="email"
                    placeholder="example@gmail.com *"
                    className="w-full"
                    value={formData.email}
                    onChange={handleInputChange}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            {/* Phone Number */}
            <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Phone Number</label>
                <CustomInput
                    name="phone"
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full"
                    value={formData.phone}
                    onChange={handleInputChange}
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
            </div>

            {/* Postal code */}
            <div className="mb-4 hidden">
                <label className="block text-sm font-medium mb-2">Postal code</label>
                <CustomInput
                    name="postal_code"
                    type="tel"
                    placeholder="1212"
                    className="w-full"
                    value={formData.postal_code}
                    onChange={handleInputChange}
                />
                {errors.postal_code && <p className="text-red-500 text-sm mt-1">{errors.postal_code}</p>}
            </div>

            {/* State */}
            {state && state.length > 1 && (
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">State</label>
                    <Select value={formData?.state_id} onValueChange={handleSelectState}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select a state" />
                        </SelectTrigger>
                        <SelectContent>
                            {state.map((item: any) => (
                                <SelectItem key={item.id} value={item.id}>{item.name}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    {errors.state_id && <p className="text-red-500 text-sm mt-1">{errors.state_id}</p>}
                </div>
            )}

            {/* City */}
            {cities.length > 0 && (
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">City</label>
                    <Select value={formData?.city_id} onValueChange={handleSelectCities}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select a city" />
                        </SelectTrigger>
                        <SelectContent>
                            {cities.map((item: any) => (
                                <SelectItem key={item.id} value={item.id}>{item.name}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    {errors.city_id && <p className="text-red-500 text-sm mt-1">{errors.city_id}</p>}
                </div>
            )}

            {/* Address */}
            <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Address</label>
                <Textarea
                    name="address"
                    placeholder="Address"
                    className="w-full"
                    value={formData.address}
                    onChange={handleInputChange}
                />
                {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
            </div>

        </>
    )
}
